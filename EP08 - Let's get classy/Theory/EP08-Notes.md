*****************************Class based component*****************************
 - invoking functional component - mounting component on web page
 - instance creation of class based comp - loading class based comp on web page
 - whnever class based comp is loaded on web page, instance of that class is created
 - When instance of class is created, constructor of respective class is created. Constructor is best place to receive props & create state vars
 - No hooks in class comps. this.state is used to create stae vars & initialize them.
 - e.g.: 
 this.state = {
	count = 0;
 };
 - For updating state variable, React provides "this.setState()" function.
 We can update state using this similar to functiona; comp's useState().
 
 Lifecycle of class component:
 1) When class (component) is instantiated, constructor is called.
 2) After constructor, render() is called.
 3) Once class component is rendered on DOM, componentDidMount() is called.
	It will be called only when component is completely mounted on page.
	In parent-child relation, lifecycle'd be:
	(i) Parent Constructor() -> Parent render() -> Child Constructor() -> Child render() -> child didMount() -> Parent didMount()
 - componentDidMount() is prominently used for API calls. This happenes bcz first we render component on page as react is very fast in redering component. Then we wait for an API to return the data. In functional comps, useEffect() hook is used mimicking the behavor of componentDidMount() in class based comps.
 - When there are multiple children to a parent, then lifecycle will be:
   (i) Parent Constructor() -> Parent render() -> Child1 Constructor() -> Child1 render() -> Child2 Constructor() -> Child2 render() -> child1 didMount() -> child2 didMount() -> Parent didMount()
   
   (ii) lifecycle method diagram: https://projects.wojtekmmaj.pl/react-lifecycle-methods-diagram/
   -- steps in (i) take place bcz react has two initial phases. render & commit.
   in render phase, constructor() & render() is called.
   in commit phase, DOM is updated by react, once DOM is updated, componentDidMount() is called; hence this is a best place to make an API call.
   -- Every component in react goes through these lifecycles.
   If there are multiple children to a parent component, then react will batch render() methods of all children toghether in render phase & mounting of all children (componentDidMount()) will be batched in commit phase by react for optimized performance.
   -- React tries to batch render phase for all children bcz, once commit phase starts, react tries to update DOM & DOM updation/ manipulation is very expensive & takse time. 
   -- Hence react tries to batch render phase as it's fast & take less time. Everything in render phase is happenig inside virtual DOM. Reconcilliation cycle on virtual DOM is very fast as it's just JS object & easy to manipulate. 
   -- Processes in commit phase are expensive & take more time. componentDidMount() is a part of commit phase.
 4) In class components, for an API call, we can make componentDidMount() as async.
 5) Lifecycle of "Update" cycle:
 - As soon as component was loaded, constructor is called & state variable
 is created with default values. Then render() happened. This render() happened with default state values; means DOM was updated with dummy/ default data.
 - Then componentDidMount() was called which made an API call; end "Mounting" cycle here. Then setState() was called to update componentwith actual data; i.e "Updating" cycle (https://projects.wojtekmmaj.pl/react-lifecycle-methods-diagram/) was started.
 Hence, when setState() was called, "Updating" cycle started. By this time, component was rendered once with dummy data.
 - Then setState() updated state variable & render() was triggered by react once again. This time, state variable had updated values, populated from an API call. Here, re-render of DOM happened. [After diffing, difference was found as data was populated from API, DOM is updated (only changed parts)] & componentDidUpdate() was called.
 - Steps:
   (i) Mounting:: "Mount" cycle:
    -- Contructor() -> render(dummy data) -> DOM<dummy data> -> ComponentDidMount(API call) -> this.setState(state variable(s) updated with actual data)
   (ii) Updating: "Update" cycle:
    -- render(API data) -> DOM<actual data from an API> -> componentDidUpdate()
 6) Cycle of unmounting:: componentWillUnmount():
 - When component removed from page, componentDidUpdate() was called, i.e we move to another "path".
 - For explanation, use <setInterval()-componentDidMount()> - <clearInterval()-componentWillUnmount()> example.
 - In functional components, componentWillUnmount() is not available. We can achieve behavior of this by returning a function from useEffect() hook.
 E.g.:
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("setInterval log");
		}, 1000);
		
		return () => {
			clearInterval(timer);
			// this returned function will behave same as componentWillUnmount() for cleanup purpose of related component.
			// this function will run after related component is unmounted, i.e. when we change "path".
		}
	}, []);
- Class comp comparison with functional comp:
  /*
  Mimicking following useEffect hook into class component (do something when "count" changes):
  useEffect(() => {
    // do something
  }, [count]);

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count) {
      // do something
    }
    console.log("Component did update");
  };
  */