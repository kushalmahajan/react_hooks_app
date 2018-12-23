"use strict";
exports.__esModule = true;
var React = require("react");
var redux_react_hook_1 = require("redux-react-hook");
var mapState = function (_a) {
    var todosReducer = _a.todosReducer;
    return ({
        todoCount: todosReducer.todos.length,
        todos: todosReducer.todos
    });
};
function TodoList() {
    var _a = redux_react_hook_1.useMappedState(mapState), todoCount = _a.todoCount, todos = _a.todos;
    return (<div>
            <div>You have {todoCount} todos</div>
            <ul>
                {todos.map(function (todo, index) { return <li key={index} {...todo}>{todo}</li>; })}
            </ul>
        </div>);
}
exports["default"] = TodoList;
