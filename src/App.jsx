import LoginForm from './Components/LoginForm'

function App() {

  const database = [{
    email: 'aaa',
    password: '1234'
  }, {
    email: 'bbb',
    password: '12345'
  }
  ]
  
  const handleLogin = (i) => {

    const showEmail = database.find(
      item => i.email === item.email)
    if (showEmail) {
      console.log('your email address is right')
    } else {
      console.log('is not right')
    }
  }

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  )
}
export default App

