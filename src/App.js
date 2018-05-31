import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';
//import RegisterForm from './RegisterForm';

const Home = () => <p> the homepage </p>
const Contact = () => <p> contact us </p>
const About = () => <p> this is the about page</p>
const NotFound = () => <p>Error! 404</p>

const routingTable = {
  '/': <Home />,
  '/contact': <Contact />,
  '/about': <About />,
  '/register': <ProfileForm />,

}




class App extends Component {
  render() {
    const {
      location,
    } = this.props

    let page
    const route = routingTable[location]
    if (!route) {
      page = <NotFound />
    } else {
      page = route
    }



    if (!this.props.isLoggedOn) {
      return (
        <div>
          <Navigation />
          <LoginForm />

        </div>
      )
    }
    return (
      <div className='App'>
        <Navigation />
        <ProfileForm />
        <hr />
        {page}
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  location: state.router.pathname,
  isLoggedOn: state.user.isLoggedOn,
})



export default connect(mapStateToProps)(App);
