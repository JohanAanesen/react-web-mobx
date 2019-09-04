import React from 'react'
import {Redirect, Route, Switch} from 'react-router'
import TodoList from './todos/todo-list'

const Router = () => (
    <Switch>
        <Route path="/todo-list" component={TodoList} />
        <Redirect from="/" exact to="/todo-list" />
    </Switch>
)

export default Router;

