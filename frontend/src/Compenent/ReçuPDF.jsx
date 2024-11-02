import React from "react";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
 
} from "@react-pdf/renderer";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    position:"relative",
    top:"30px",
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
    fontSize: 10,
    color:"gray",
  },
  logoSection: {
    width: "30%", // Less space for the logo on the right
    display: "flex",
    justifyContent: "flex-end",
  },
 
  section:{
    position:"relative",
    top:"25px",

  },
   text0: {
    fontSize: 20,
    marginBottom: 5,
    fontStyle:"italic",
   
    
  },
  text1: {
    fontSize: 10,
    marginBottom: 5,
    fontStyle:"noemale",
   
    
  },
  text2: {
    fontSize: 18,
    marginBottom: 5,
    textDecoration: "underline",
    fontStyle:"oblique",
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
    
  },
  biggerTableCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    color: "#424242",
    textTransform: "capitalize",
    backgroundColor: "#DAF7A6",
    fontWeight: "bold",
  },
  colspan3: {
    flex: 2 * 2  + 8.7,
    padding: 4,
    textAlign:"right",
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
            
          
          <Text style={styles.text0}>Iklil_Center</Text>
       
          </View>
        </View>

        <View style={styles.section}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text2}>Reçu d'inscription</Text>
        </View>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text1}>Nom Complet</Text>
            </View>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text1}>Email</Text>
            </View>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text1}>Choix d'inscription</Text>
            </View>
            <View style={styles.biggerTableCell}>
              <Text style={styles.text1}>Statut du participant</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.text1}>{nom + " " + prenom}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text1}>{email}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text1}>{choix}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text1}>{statu}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
         
            <View style={styles.colspan3}>
              <Text style={styles.text1}>Prix à payer :</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.text1}>{prix_payer(statu)}DH</Text>
            </View>
           
          </View>
        </View>
        <Text style={styles.text1}>Note:L'inscription </Text>
        </View>
      </Page>
    </Document>
  );
};

export default ReçuPDF;






