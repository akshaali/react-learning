/*
Pure component
for same state and prop it will render the same component 

state and props - dependency for the render of the component

1. class Component
 - PureComponent
 - shouldComponentUpdate()

2. Functional Component
 - HOC , memo 


Comparision Operator (==, ===)
1. Number (3===4)
2. String ("abc" === "abc")
3. Object 
  - Array
  - Object

const a = {property1: 1, property2: 2, property3: 3}
const b = {property1: 1, property2: 2, property3: 3}
const c = a;

a === b --->> false 
(comparistion -> memory reference)

* Shallow comparison

const objA = {property1: 1, property2: 2, property5: 3}
const objB = {property1: 1, property2: 2, property3: 4}

shallowComparison(objA, objB);
---> === 
--> typeof objA , typeof objB
--> isEqual(keysArrayOfObjA, keysArrayOfObjB)
--> we can map the key array and check the equality of the both object's value





* Deep comparison






 
*/