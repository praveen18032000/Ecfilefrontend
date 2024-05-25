import React from 'react'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable';
function DownloadPdf() {
    const entireStatementData = {
        address: "15 Dunrobin Acres",
        company_name: "ABC Stage",
        contact_name: "abc",
        is_paid:true,
        dummyData : [
            {
              disbursementDate: "2024-05-01",
              dueDate: "2024-06-01",
              amountDisbursed: 5000,
              factorFee: 250,
              delinquentFee: 50,
              amountToBeSettledToCCI: 5300,
              invoicePO: "INV12345",
              invoiceAmount: 5500,
              vendorBuyer: "Vendor A",
              invoicePODate: "2024-04-15",
              CCISettlementDate: "2024-06-15"
            },
            {
              disbursementDate: "2024-05-05",
              dueDate: "2024-06-05",
              amountDisbursed: 7000,
              factorFee: 350,
              delinquentFee: 0,
              amountToBeSettledToCCI: 7350,
              invoicePO: "INV67890",
              invoiceAmount: 7500,
              vendorBuyer: "Vendor B",
              invoicePODate: "2024-04-20",
              CCISettlementDate: "2024-06-20"
            },
            {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },

              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },

              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2024-06-20"
              },
              {
                disbursementDate: "2024-05-05",
                dueDate: "2024-06-05",
                amountDisbursed: 7000,
                factorFee: 350,
                delinquentFee: 0,
                amountToBeSettledToCCI: 7350,
                invoicePO: "INV67890",
                invoiceAmount: 7500,
                vendorBuyer: "Vendor B",
                invoicePODate: "2024-04-20",
                CCISettlementDate: "2025-06-60"
              },
        ],
        total_payment_pending: "J$ 79,370.22"
    };
    const style = {
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
   const getCurrentTime = () =>{
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
    
    const handleDownloadPdf = () => {
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        // Add company details to the first page
        pdf.text("Carbyne Capital Investments Limited", 14, 22);
        pdf.text("8 Lady Musgrave Rd Kingston, Jamaica", 14, 30);
        pdf.text("Email: info@ccija.com", 14, 38);
        pdf.text("Phone: 876-631-7661", 14, 46);
        pdf.text("Website: www.ccija.com", 14, 54);
        pdf.text(`Contact Name: ${entireStatementData.contact_name ?? "-"}`, 14, 62);
        pdf.text(`Company Name: ${entireStatementData.company_name ?? "-"}`, 14, 70);
        pdf.text(`Address: ${entireStatementData.address ?? "-"}`, 14, 78);
        pdf.text(`Total Payment Pending: ${entireStatementData.is_paid ? "( " : ""}${entireStatementData.total_payment_pending ?? "0"}${entireStatementData.is_paid ? " )" : ""}`, 14, 86);
        pdf.text(`As at: ${getCurrentTime()}`, 14, 94);
    
        // Prepare the table data
        const styledTableData = entireStatementData.dummyData.map(item => [
            { content: item.disbursementDate, styles: style.cellnew2 },
            { content: item.dueDate, styles: style.cellnew },
            { content: item.amountDisbursed, styles: style.cellnew2 },
            { content: item.factorFee, styles: style.cellnew},
            { content: item.delinquentFee, styles: style.cellnew2 },
            { content: item.amountToBeSettledToCCI, styles: style.cellnew },
            { content: item.invoicePO, styles: style.cellnew2 },
            { content: item.invoiceAmount, styles: style.cellnew },
            { content: item.vendorBuyer, styles: style.cellnew2 },
            { content: item.invoicePODate, styles: style.cellnew },
            { content: item.CCISettlementDate, styles: style.cellnew2 }
        ]);
    
        // Define the table columns
        const tableColumns = [
          'Disbursement Date',
          'Due Date',
          'Amount Disbursed',
          'Factor Fee',
          'Delinquent Fee',
          'Amount to be Settled to CCI',
          'Invoice/PO #',
          'Invoice Amount',
          'Vendor/Buyer',
          'Invoice/PO Date',
          'CCI Settlement Date',
        ];
    
        // Add the table
        pdf.autoTable({
            startY: 102, // Start after company details
            head: [tableColumns],
            body: styledTableData,
            didDrawPage: function (data) {
                // Footer
                const totalPages = pdf.internal.getNumberOfPages();
                const pageNumber = data.pageNumber;
                pdf.setFontSize(10);
                pdf.text(`Page ${pageNumber} of ${totalPages}`, data.settings.margin.left, pdf.internal.pageSize.height - 10);
            }
        });
        
    
        pdf.save('Client_statement.pdf');
      };
  return (
    <>
    <div onClick={handleDownloadPdf}>DownloadPdf</div>
    </>
  )
}

export default DownloadPdf