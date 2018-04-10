

//stuff from old App.js

      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route path="/" component={Search} />
        </Switch>
      </Router>



<Router>
<Link
  to='/saved'
  className='white-text'>
  <button>Saved Articles</button>
</Link>
</Router>
