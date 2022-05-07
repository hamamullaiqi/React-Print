import React from "react";
import "./invoiceStyle.css";
const pageStyle = ` @page { size: 8.5in 5.5in; }`;

class ComponentToPrint extends React.Component {
	render() {
		return (
			<div style={{ padding: "0px 48px" }}>
				<style>{pageStyle}</style>
				<div className="container">
					<div className="header">
						<h1 style={{ textAlign: "center" }}>INVOICE</h1>
						<div
							className="sub-header"
							style={{ display: "flex", justifyContent: "space-between" }}
						>
							<div>
								<p>Bill To : </p>
								<p>SLAMET RIYADI</p>
								<p>332805323410002</p>
								<p>0899-3244-2434</p>
							</div>
							<div>
								<p>No. Invoice : #123456</p>
								<p>Invoice Date: 05/05/2021 11:06:40 WIB</p>
								<p>Empu/Agen : PT. ARDHANA PERKASA</p>
								<p>Address: Jl. merdeka no 12. Kota Tegal</p>
								<p>No Telp. : 0821-2134-3244</p>
							</div>
						</div>
					</div>

					<div className="detail-invoice">
						<div>
							<table>
								<thead>
									<tr>
										<th>No</th>
										<th>AWB No</th>
										<th>Date</th>
										<th>PCS</th>
										<th>KGS</th>
										<th>TTL Charges</th>
										<th>TTL Surcharges</th>
									</tr>
								</thead>
								<tbody className="body-table">
									<tr>
										<td>No</td>
										<td>AWB No</td>
										<td>Date</td>
										<td>PCS</td>
										<td>KGS</td>
										<td>TTL Charges</td>
										<td>TTL Surcharges</td>
									</tr>
									<tr>
										<td>No</td>
										<td>AWB No</td>
										<td>Date</td>
										<td>PCS</td>
										<td>KGS</td>
										<td>TTL Charges</td>
										<td>TTL Surcharges</td>
									</tr>
								</tbody>
							</table>
							<div className="foot-table">
								<div>
									<p>Sub Total</p>
									<p>Biaya Admin</p>
									<p>Discount</p>
									<p>Total</p>
								</div>
								<div style={{ textAlign: "right", paddingLeft: 100 }}>
									<p> Sub Total</p>
									<p> Biaya Admin</p>
									<p>Discount</p>
									<p>Total</p>
								</div>
							</div>
                            <hr />
						</div>
					</div>

					<div className="footer">
						<div>
							<p>
								Payment Method: <span>Credit</span>
							</p>
							<p>In Amount</p>
							<p>Seratus Ribu lima ratus ribu rupiah</p>
						</div>
                        <div>
                            <p style={{ textAlign: "center", marginBottom: 50}}>Customer</p>
                            <p>(........................)</p>
                        </div>
                        <div>
                            <p style={{ textAlign: "center", marginBottom: 50}}>Receiver</p>
                            <p>(........................)</p>
                        </div>
					</div>
				</div>
			</div>
		);
	}
}

export default ComponentToPrint;
