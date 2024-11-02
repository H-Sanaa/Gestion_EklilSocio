import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
 
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  
  
  header: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
    padding: 10,
    backgroundColor: "gray",
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
    color: "gray",
  },
  logoSection: {
    width: "30%", // Less space for the logo on the right
    display: "flex",
    justifyContent: "flex-end",
  },

 
  text0: {
    fontSize: 20,
    marginBottom: 5,
    fontStyle: "italic",
  },
  text: { fontSize: 14 },
  text1: {
    fontSize: 10,
    marginBottom: 5,
    fontStyle: "noemale",
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    //paddingVertical: 5,
  },
  section: {
    position:"relative",
    top:"25px",
  },
  tableCell: {
    flex: 1,
    paddingHorizontal: 10,
    padding: 10,
    fontSize: 11,
  },
  text: {
    fontSize: 12,
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
});

const LivrePdf = ({ livres, selectedOption }) => {
  return (
    <Document>
          {/*render a single page*/}
     <Page size="A4" style={styles.page}>
    
      {/* Start of the document*/}
      <View style={styles.headerContainer}>
        <View style={styles.addressSection}>
          <Text>Adresse : Av. Moulay El Abbas, Tétouan 93020</Text>
          <Text>Tél : 05-39-96-59-30</Text>
        </View>
        <View style={styles.logoSection}>
          <Text style={styles.text0}>IklYl_Center</Text>
        </View>
      </View>
      
      
          <View style={styles.section}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text2}>Liste des Livres - {selectedOption}</Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.biggerTableCell}>
                <Text style={styles.text1}>Nom du Livre</Text>
              </View>
              <View style={styles.biggerTableCell}>
                <Text style={styles.text1}>Auteur</Text>
              </View>
              <View style={styles.biggerTableCell}>
                <Text style={styles.text1}>Année</Text>
              </View>
              <View style={styles.biggerTableCell}>
                <Text style={styles.text1}>Code </Text>
              </View>
              <View style={styles.biggerTableCell}>
                <Text style={styles.text1}>Prix </Text>
              </View>
            </View>

           
              {livres.map((livre) => (
                 
                <View key={livre.id_livre} style={styles.tableRow}>
                   
                  <View style={styles.tableCell}>
                    <Text style={styles.text}>
                       {livre.nom_livre}
                    </Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.text}>{livre.nom_auteur}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.text}>{livre.annee}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.text}>{livre.livre_code}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.text}>{livre.prix} MAD</Text>
                  </View>
                </View>
               
              ))}
            
          </View>
          </View>
      
     
    
    </Page>
    </Document>
  );
};

export default LivrePdf;
