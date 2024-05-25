import React, { Component } from "react";
import log from "../pexels-photo-1580271.jpeg"
const getStatementStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "#20BB6E";
      case "Overdue":
        return "#F96262";
      case "Pending":
        return "black";
      default:
        return "#202A45";
    }
};

const styles = {
  reset: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  pdfContainer: {
    width: "830px",
    height: "auto",
    padding: "5px",
  },
  content: {
    display: "flex",
    gap: 6
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    height: "auto",
    width: "15%",
    padding: '7px'
  },
  image: {
    width: 100,
    height: 60,
    background: "transparent"
  },
  logoTitleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoTitle: {
    fontSize: 9,
  },
  itemsTitleContainer: {
    fontSize: 9,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    lineHeight: '2',
  },
  itemLabel: {
    fontWeight: "light",
    fontSize: 9,
    color: '#585c61'
  },
  itemsValue: {
    fontSize: 9,
  },
  itemsValue2: {
    fontSize: 9,
  },
  itemsWeb: {
    fontSize: 9,
    borderBottom: '1px solid black',
  },
  totalPendingButton: {
    color: "#2E2A40",
    fontSize: 9,
    height: 'auto',
    width: 'auto',
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "demibold",
    backgroundColor: "#FED86C",
    borderRadius: 2,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: 'center',
    height: "auto",
    width: "830px",
    backgroundColor: "#F6EACC",
    borderBottom: '1px solid #E7E7E7',
  },
  header: {
    textAlign: 'center',
    fontWeight: 400,
    color: "black",
    fontSize: 10,
    width: '70px',
    padding: "5px 7px",
  },
  header1: {
    textAlign: 'center',
    fontWeight: 400,
    color: "black",
    fontSize: 10,
    width: '90px',
    padding: "5px 7px",
  },
  row1: {
    display: "flex",
    flexDirection: "row",
    alignItem: "center",
    textAlign: 'center',
    height: "auto",
    width: "830px",
    borderBottom: '0.5px solid #E7E7E7'
  },
  cellnew: {
    width: '70px',
    fontSize: 9,
    textAlign: "center",
    color: "rgba(117, 117, 117, 1)",
    padding: "7px 0px",
  },
  cellnew2: {
    width: '90px',
    fontSize: 9,
    textAlign: "center",
    color: "rgba(117, 117, 117, 1)",
    padding: "7px 0px",
  }
};

class ClientStatementPDFTemplate extends Component {
    constructor(props) {
      super(props);
    }

    getCurrentTime() {
        const currentTime = new Date();
        const jamaicanOffset = -5 * 60 * 60 * 1000; // Offset for Jamaica timezone (-5 hours)
        
        // Calculate Jamaican time by adding the offset
        const jamaicanTime = new Date(currentTime.getTime() + jamaicanOffset);
        
        // Format time
        const formattedHours = (jamaicanTime.getUTCHours() < 10 ? '0' : '') + jamaicanTime.getUTCHours();
        const formattedMinutes = (jamaicanTime.getUTCMinutes() < 10 ? '0' : '') + jamaicanTime.getUTCMinutes();
        const formattedTime = formattedHours + ":" + formattedMinutes;
        
        // Format date
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const formattedDate = jamaicanTime.getUTCDate() + "-" + months[jamaicanTime.getUTCMonth()] + "-" + jamaicanTime.getUTCFullYear();
        
        // Construct formatted date and time string
        const formattedDateTime = `${formattedTime} (EST) ${formattedDate}`;
        
        return formattedDateTime;
    }
    
    

  generateTableData = (data) => {
    return data.map((item, index) => (
      <tr key={`${index * 7}-i`} style={styles.row1}>
        <td style={styles.cellnew2}>{item.disbursementDate}</td>
        <td style={styles.cellnew}>{item.dueDate}</td>
        <td style={styles.cellnew2}>{item.amountDisbursed}</td>
        <td style={styles.cellnew}>{item.factorFee}</td>
        {/* {this.props.isShow.length > 0 && <td style={styles.cellnew}>{item.delinquentFee}</td>} */}
        <td style={styles.cellnew2}>{item.amountToBeSettledToCCI}</td>
        <td style={styles.cellnew}>{item.invoicePO}</td>
        <td style={styles.cellnew2}>{item.invoiceAmount}</td>
        <td style={styles.cellnew}>{item.vendorBuyer}</td>
        <td style={styles.cellnew2}>{item.invoicePODate}</td>
        <td
          style={{
            ...styles.cellnew2,
            color: getStatementStatusColor(item.CCISettlementDate),
            fontSize: 9,
            textAlign: "center",
          }}
        >
          {item.CCISettlementDate}
        </td>
      </tr>
    ));
  };

  render() {
    const {
      company_name,
      address,
      contact_name,
      total_payment_pending,
      is_paid,
      dummyData
    } = this.props.pdfData;
    // const isDelinquentFeeAvailable = this.props.isShow;

    return (
      // @ts-ignore
      <div style={styles.pdfContainer}>
        <div style={styles.content}>
          <div style={styles.logoContainer}>
            <img
              style={styles.image}
              src={log}
              alt="PDF Logo"
            />
            <div style={styles.logoTitleContainer}>
              <span style={styles.logoTitle}>Carbyne Capital</span>
              <span style={styles.logoTitle}>Investments Limited</span>
            </div>
          </div>
          <div style={{ width: '30%', marginTop: '9px' }}>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Email:</span>
              <span style={styles.itemsValue}>info@ccija.com</span>
            </div>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Phone:</span>
              <span style={styles.itemsValue}>876-631-7661</span>
            </div>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Website:</span>
              <span style={styles.itemsWeb}>www.ccija.com</span>
            </div>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Address:</span>
              <span style={styles.itemsValue}>
                8 Lady Musgrave Rd Kingston, Jamaica
              </span>
            </div>
          </div>
          <div style={{ width: '35%', marginTop: '9px' }}>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Contact Name:</span>
              <span style={styles.itemsValue}>
                {contact_name ?? "-"}
              </span>
            </div>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Company Name:</span>
              <span style={styles.itemsValue}>
                {company_name ?? "-"}
              </span>
            </div>
            <div style={styles.itemsTitleContainer}>
              <span style={styles.itemLabel}>Address:</span>
              <span style={styles.itemsValue}>
                {address ?? "-"}
              </span>
            </div>
          </div>
          <div style={{ width: '30%', marginTop: '9px' }}>
            <div style={{ ...styles.itemsTitleContainer, marginBottom: "2px" , gap: 2 }}>
              <span style={styles.itemLabel}>
                Total Payment Pending:
              </span>
              <div style={styles.totalPendingButton}>
                <p
                  style={{ ...styles.itemsValue2, fontWeight: "bold", color: is_paid ? "#20BB6E" : "black", margin: '0px', padding: '2px 6px' }}
                >
                  {is_paid ? "( " : ""}
                  {total_payment_pending ?? "0"}
                  {is_paid ? " )" : ""}
                </p>
              </div>
            </div>
            <div style={styles.itemsTitleContainer}>
              <span style={{ ...styles.itemLabel, marginLeft: "15px" }}>As at:</span>
              <span style={styles.itemsValue}>
                {this.getCurrentTime()}
              </span>
            </div>

          </div>
        </div>
        <div style={{ width: "auto" }}>
          <table style={{ width: "100%" }}>
            <thead>
              <tr style={styles.row}>
                <th style={styles.header1}>Disbursement Date</th>
                <th style={styles.header}>Due Date</th>
                <th style={styles.header1}>Amount Disbursed</th>
                <th style={styles.header}>Factor Fee</th>
                {/* {isDelinquentFeeAvailable.length > 0 && <th style={styles.header}>Delinquent Fee</th>} */}
                <th style={styles.header1}>Amount to be Settled to CCI</th>
                <th style={styles.header}>Invoice/PO #</th>
                <th style={styles.header1}>Invoice Amount</th>
                <th style={styles.header}>Vendor/Buyer</th>
                <th style={styles.header1}>Invoice/PO Date</th>
                <th style={styles.header1}>CCI Settlement Date</th>
              </tr>
            </thead>
            <tbody>{this.generateTableData(dummyData)}
            </tbody>
            <tfoot>page 1 out of 3</tfoot>
          </table>
        </div>
        <span
          data-test-id="test_id"
          style={{
            textAlign: "center",
            width: "100%",
            height: 20.25,
            marginTop: "10px",
            fontSize: 10.5,
          }}
        />
      </div>
    )
  }
}

export default ClientStatementPDFTemplate;





