async function foo() {
	// ...
  }
  
  async function bar() {
	// ...
	return await foo(); // Noncompliant
  }

  function MyComponent() {
    return ( // Noncompliant: don't use children and dangerouslySetInnerHTML at the same time
        <div dangerouslySetInnerHTML={{ __html: "HTML" }}>
            Children
        </div>
    );
}