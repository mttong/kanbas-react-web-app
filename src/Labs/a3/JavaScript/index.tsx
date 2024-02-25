import VariablesAndConstants from "./variables/VariablesAndConstants";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import LoggedIn from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import ParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import JsonStringify from "./json/JsonStringify";
import TemplateLiterals from "./string/TemplateLiterals";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    console.log("Hello World!");
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <BooleanVariables/>
          <IfElse/>
          <LoggedIn/>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <ParenthesisAndParameters/>
          <WorkingWithArrays/>
          <JsonStringify/>
          <TemplateLiterals/>
          <House/>
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript

