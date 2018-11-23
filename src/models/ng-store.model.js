export default (function () {
	const $state = Symbol('state')
	const $getters = Symbol('getters')
	const $invokeGetter = Symbol('invokeGetter')

  class NgStore {
  	constructor(initialState) {
  		if (!angular.isObject(initialState)) {
  			throw new Error('"initialState" must be an object.')
  		}

  		this[$state] = initialState
  		this[$getters] = {ids: []}
  	}

  	[$invokeGetter](id, action) {
  		const getter = this[$getters][id]

  		if (!getter) {
  			throw new Error('No getter found.')
  		}

  		if (!(getter.callsCount < 0 || getter.query(action))) { return }

  		getter.callsCount += 1
  		getter.finalPipe(
  			getter.pipes.reduce((state, pipe) => {
  				return pipe(state, getter.callsCount)
  			}, this.getState()),
  			getter.callsCount,
  		)
  	}

  	getState() {
  		return angular.copy(this[$state])
  	}

  	getStateStream(actionQuery, ...pipes) {
  		if (!(
  			actionQuery instanceof RegExp
  			|| angular.isString(actionQuery)
  			|| angular.isArray(actionQuery)
			)) {
  			throw new Error('"actionQuery" must be a type of RegExp or string or array of string.')
			}

			if (pipes.filter((pipe) => !angular.isFunction(pipe)).length > 0) {
				throw new Error('"pipes" must be type of array of functions.')	
			}

			const getterID = Symbol()
			const finalPipe = pipes.pop()
			const query = actionQuery instanceof RegExp
				? (action) => actionQuery.test(action) : angular.isString(actionQuery)
				? (action) => actionQuery === action
				: (action) => actionQuery.includes(action)

			this[$getters].ids.push(getterID)
			this[$getters][getterID] = {callsCount: -1, query, pipes, finalPipe}
			this[$invokeGetter](getterID)

			const getterTerminator = {
				end: () => {
					this[$getters].ids.splice(this[$getters].ids.indexOf(getterID), 1)
					delete this[$getters][getterID]
				},
				addTo: (getters) => {
					if (!angular.isArray(getters)) {
						throw new Error('"getters" must be a type of array.')
					}

					getters.push(getterTerminator)
					return getterTerminator
				},
			}

			return getterTerminator
  	}

  	setState(action, state) {
  		if (!(angular.isString(action) && action.length > 0)) {
  			throw new Error('"action" must be a non-empty string.')
  		}

  		if (!(angular.isObject(state) || angular.isFunction(state))) {
  			throw new Error('"state" must be an object or function.')
  		}

  		state = angular.isFunction(state) ? state(this.getState()) : state
  		state = angular.copy(state)

  		Object.keys(this[$state]).forEach((stateProp) => {
  			if (angular.isDefined(state[stateProp])) {
  				this[$state][stateProp] = state[stateProp]
  			}
  		})

  		this[$getters].ids.forEach((getterID) => {
  			this[$invokeGetter](getterID, action)
  		})
  	}
  }

  NgStore.create = function (initialState) {
  	return new NgStore(initialState)
  }

  return NgStore
}())
