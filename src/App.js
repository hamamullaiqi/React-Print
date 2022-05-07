import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import ComponentToPrint from "./ComponentToPrint";

function App() {
	const componentRef = useRef(null);
  const pageStyle = `{size : 8.5in 5.5in}`
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="App">
			<h1>Print PDF</h1>
			<div>
				<div 
					style={{ border: "1px solid #000" }}
				>
					<ComponentToPrint ref={componentRef}  />
				</div>
				<button onClick={handlePrint}>Print this out!</button>
			</div>
		</div>
	);
}

export default App;
