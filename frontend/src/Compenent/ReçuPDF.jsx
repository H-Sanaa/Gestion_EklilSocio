import React from "react";
import logo from "./Assets/logo.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
    width: "100%",
    height: "297mm",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Align address to the left and logo to the right
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  addressSection: {
    width: "50%", // More space for the address on the left
    fontSize: 12,
    color:"gray",
  },
  logoSection: {
    width: "20%", // Less space for the logo on the right
    display: "flex",
    justifyContent: "flex-end",
  },
  Image: {
    width: "90px", // Adjust size of the logo
    height: "auto",
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
  text2: {
    fontSize: 10,
    marginBottom: 5,
    textDecoration: "underline",
  },
  table: {
    width: "100%",
    marginBottom: 20,
    borderRadius: 4,
    marginTop: 10,
    border: "1px solid #e0e0e0",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    alignItems: "center",
    minHeight: 30,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    color: "#424242",
    textTransform: "capitalize",
  },
  biggerTableCell: {
    backgroundColor: "#DAF7A6",
    fontWeight: "bold",
  },
  colspan3: {
    flex: 2 * 2 + 8.7,
    borderRight: "1px solid #000",
    borderBottom: "1px solid #000",
    padding: 4,
  },
});

// Function to determine price
const prix_payer = (statu) => {
  const prix_etudiant = 150;
  const prix_fonctionnaire = 300;
  return statu === "Fonctionnaire" ? prix_fonctionnaire : prix_etudiant;
};

const ReçuPDF = ({ nom, prenom, email, statu, choix }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerContainer}>
          <View style={styles.addressSection}>
            <Text>Adresse : Av. Moulay El Abbas, Tétouan 93020</Text>
            <Text>Tél : 05-39-96-59-30</Text>
          </View>
          <View style={styles.logoSection}>
            <Image style={styles.Image} src={logo} />
          
          <Text style={styles.text}>Iklil Tetouan Cultural Center</Text>
       
          </View>
        </View>

      
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text2}>Reçu d'inscription</Text>
        </View>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text}>Nom Complet</Text>
            </View>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text}>Choix d'inscription</Text>
            </View>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text}>Statut du participant</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.text}>{nom + " " + prenom}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text}>{email}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text}>{choix}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text}>{statu}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.colspan3}>
              <Text style={styles.text}>Prix à payer</Text>
            </View>
            <View style={styles.colspan3}>
              <Text style={styles.text}>{prix_payer(statu)}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReçuPDF;






// // StudentReceiptPDF.js
// import React from "react";
// import logo from "./Assets/logo.png";
// import {
//   Page,
//   Text,
//   View,
//   Document,
//   StyleSheet,
//   Image,
 
// } from "@react-pdf/renderer";
// //import PDFTable from "./PDFTable";
// // Styles pour le PDF

// // Composant qui génère le PDF

//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: "row",
//       padding: 10,
//       width: "100%",
//       height: "297mm",
//     },
//     container: {
//       display: "flex",
//       flexDirection: "column",
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       paddingLeft: 40,
//       flexDirection: "column",
//       width: "100%",
//     },

    
//     centerSection: {
//       textAlign: "center",
//       flexGrow: 1,
//       paddingLeft: 3,
//     },
//     header: {
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between", // Pushes address to the left and logo to the right
//       alignItems: "center",
//       marginBottom: -30,
//       padding: 10,
//       fontSize: 12,
     
//     },
//     addressSection: {
//       width: "70%", // Takes more space for the address on the left
//       fontSize: 12,
//     },
//     logoSection: {
//       width: "35%", // Less space for the logo on the right
//       display: "flex",
//       justifyContent: "flex-end",
//     },
//     Image:{
     
//       width: "80px", // Adjust size of the logo
//       height: "auto",
//     },
//     text: {
//       fontSize: 20,
//       marginBottom: 5,
//     },
//     text2: {
//       fontSize: 7.5,
//       marginBottom: 5,
//       textDecoration:"underline",
//     },
//     table: {
//       width: "100%",
//       marginBottom: 20,
//       borderRadius: 4,
//       marginTop: 10,
//       border:"1px solid #e0e0e0",
//     },
//     tableRow: {
//       flexDirection: "row",
//       borderBottomWidth: 1,
//       borderBottomColor: "#e0e0e0",
//       alignItems: "center",
//       minHeight: 30,
//       flexWrap: "wrap",
//       ":not(:last-child)": {
//         borderBottom: "none",
//       },
//     },
//     tableCell: {
//       flex: 1,
//       padding: 8,
//       fontSize: 11,
//       color: "#424242",
//       textTransform: "capitalize",
//       alignItems: "center",
//     },
//     biggerTableCell: {
//       backgroundColor: "#DAF7A6",
//       fontWeight: "bold",
//       overflow: "hidden",
//       whiteSpace: "nowrap",
//       alignItems: "center",
//     },
//     colspan3: {
//       flex: 2 * 2 * 2+ 8.7,
//       borderRight: "1px solid #000",
//       borderBottom: "1px solid #000",
//       padding: 4,
//     },
//   });
//   const prix_payer=(statu)=>{
//     const prix_etudiant = 150;
//     const prix_fonctionnaire = 300;
//     if (statu === "Fonctionnaire") {
//       return prix_fonctionnaire;
//      } else if (statu === "Etudiante") {
//        return prix_etudiant;
//      }
//   }
 
//   const ReçuPDF = ({ nom, prenom, email, statu, choix }) => { 
//     return(
//     <Document>
//       <Page size="A4" style={styles.page}>
//       <View style={styles.container}>

//           <View style={styles.headerContainer}>
//           <View style={styles.addressSection}>
//             <Text>Adresse : Av. Moulay El Abbas, Tétouan 93020</Text>
//             <Text>Tél : 05-39-96-59-30</Text>
//           </View>
//           <View style={styles.logoSection}>
//             <Image style={styles.Image} src={logo} />
//           </View>
//         </View>

//         <View style={{ alignItems: "center" }}>
               
//                <Text style={styles.text}> Iklil Tetouan Cultural Center </Text>
//         </View>
//         <View style={styles.container}>
//             <View style={{ ...styles.section, ...styles.centerSection }}>
//               <Text style={styles.text2}>Reçu d'inscription </Text>
//             </View>
//           </View>
//           <View style={styles.container}>
//           <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <View style={styles.biggerTableCell}>
//               <Text style={styles.text}>Nom Complet</Text>
//             </View>
//             <View style={styles.biggerTableCell}>
//               <Text style={styles.text}>Email</Text>
//             </View>
//             <View style={styles.biggerTableCell}>
//               <Text style={styles.text}>Choix d'inscription</Text>
//             </View>
//             <View style={styles.biggerTableCell}>
//               <Text style={styles.text}>Statut du participant</Text>
//             </View>
//           </View>

//           <View style={styles.tableRow}>
//             <View style={styles.tableCell}>
//               <Text style={styles.text}>{nom + " " + prenom}</Text>
//             </View>
//             <View style={styles.tableCell}>
//               <Text style={styles.text}>{email}</Text>
//             </View>
//             <View style={styles.tableCell}>
//               <Text style={styles.text}>{choix}</Text>
//             </View>
//             <View style={styles.tableCell}>
//               <Text style={styles.text}>{statu}</Text>
//             </View>
//           </View>

//           <View style={styles.tableRow}>
//             <View style={styles.colspan3}>
//               <Text style={styles.text}>Prix à payer</Text>
//             </View>
//             <View style={styles.colspan3}>
//               <Text style={styles.text}>{prix_payer(statu)}</Text>
//             </View>
//             </View>
//             </View>
//         {/*  */}
       
//         </View>
//         </View>
//       </Page>
//     </Document>
//     )
//   };

// export default ReçuPDF;
