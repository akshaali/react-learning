/*
Discussions
Hooks
 * useRef -->> const variableName = useRef(initialValue)
    1. saves a refrence 
    2. mutable
    3. rederendering is not dependent on the useRef

 * useReducer --> const [stateName, callReducerFunction] = useReducer(reducerFunction, initialValue);
    1. similar to useState 
    why? * it makes the state updation easier when we work with nested object
         * if dealing with prevsious state value
 * useCallback --> useCallback(callbackFunction, depencyArray) (Second argument is optional)
   1. returns a function 
   2. Function will only be recreated when states in depency array get updated
   3. we use this for optimization
 * useMemo --> useMeno(callbackFunction, depencyArray) (Second argument is optional)
   1. return a value
   2. value will be recalculated when the state in the depency array get updated
   3. we use this for optimization purpose 
 * useState
 * useEffect
 * useContext 
 * useDispatch
 * useSelector
 * useNavigate
 * useLocation
 * useParams 
 */

