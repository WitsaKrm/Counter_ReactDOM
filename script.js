const root = ReactDOM.createRoot(document.querySelector('#root'))

function Content() {
    return (
      <div className="container">
        <h1>Sum=0</h1>
        <button className="btnadd">Add Counter</button>
        <div className="content">
          <button>+</button>
          <h2>{0}</h2>
          <button>-</button>
          <button>0</button>
        </div>
      </div>
    );
  }
  root.render(<Content />);