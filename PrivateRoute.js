import { Route, Redirect } from 'react-router-dom';
export default ({ render, ...rest }) => {
    return (
        <Route
            render={
                routeProps => (
                    localStorage.getItem('login') ? render(routeProps) : <Redirect to="/login" />
                )
            }
        />
    )
}