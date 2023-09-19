1) When and why do we need lazy()?
=> lazy() is used in code splitting, also known as lazy loading of code.
=> While bundling, single Js file is created for all code. Sometimes for large apps, it may cause performance issue while loading this file in browser as size of this file may become large.
=> So for the code which is not needed to be rendered on page imiidiately, it is loaded lazily.
For doing so, react provides lazy().
=> For syntax, refer EP09-Notes.md

2) What is suspense?
=> It's component provided by react to wrap a specific code/ component accessed on specific "/path",
which is being lazily loaded.
=> For details, refer EP09-Notes.md

3) Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error?
=> refer EP09-Notes.md

4) Advantages and Disadvantages of using this code splitting pattern?
=> 

5) When do we and why do we need suspense?
=> For details, refer EP09-Notes.md