
import React, { useState, useEffect, useCallback } from "react";
import Header from "../HeaderFooter/Header";
import axios from "axios";
import { toast } from 'react-toastify';
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  InputNumber,
  Row,
  Col,Select
  
} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import {  PDFDownloadLink } from '@react-pdf/renderer';
import "./Livre.css";

const Livre = () => {
  //connect to my rest api
  
  const REST_API_BASE_URL = "http://localhost:8080/api/livre";
  const [livres, setLivres] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isPrintModalVisible, setIsPrintModalVisible] = useState(false);
  const [form] = Form.useForm();
 
  const [currentId, setCurrentId] = useState(null); // Track if we are editing
  const [searchTerm, setSearchTerm] = useState(''); //search

 
  const [livre_code, setLivre_code] = useState('');
  const [nom_livre, setNom_livre] = useState('');
  const [nom_auteur, setNom_auteur] = useState('');
  const [photo, setPhoto] = useState('');
  const [annee, setAnnee] = useState('');
  const [prix, setPrix] = useState('');

 //fetch all books
  const fetchAllLivres = useCallback(() => {
    axios.get(REST_API_BASE_URL)
      .then((response) => setLivres(response.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetchAllLivres();
  }, [fetchAllLivres]);

  //show model 
  const showModal = (livreId) => {
    setVisible(true);
    setCurrentId(livreId || null); // Set current ID to null if not editing
    if (livreId) {
      console.log(livreId);
      axios.get(`${REST_API_BASE_URL}/${livreId}`)
        .then(response => {
          const livre = response.data;
          
          form.setFieldsValue(Livre);
          form.setFieldsValue({
            nom_livre: livre.nom_livre,
            nom_auteur: livre.nom_auteur,
            annee: livre.annee,
            prix: livre.prix,
            livre_code: livre.livre_code,
          });
          setPhoto(livre.photo);
        })
        .catch(error => console.log(error));
     }  
      form.resetFields();
    }
  
  const save = (id) => {
    const livre = { livre_code, nom_livre, nom_auteur, photo, annee, prix };
    if (id) {
      console.log("livre id: ",id);
      axios.put(`${REST_API_BASE_URL}/${id}`, livre)
      
        .then(() => {
          toast.success("Livre modifié avec succès !", {
            style: { backgroundColor: "green", color: "black" }
          });
          fetchAllLivres(); // Refresh list
          handleCancel();
        })
        .catch(error => console.error(error));
    } else {
      axios.post(`${REST_API_BASE_URL}/ajouter`, livre)
        .then(() => {
          toast.success("Livre ajouté avec succès !", {
            style: { backgroundColor: "green", color: "#ffffff" }
          });
          fetchAllLivres(); // Refresh list
         handleCancel();
        })
        .catch(error => console.error(error));
    }
  };

  const supprimer = (id) => {
    axios.delete(`${REST_API_BASE_URL}/${id}`)
      .then(() => {
        toast.success("Livre supprimé avec succès", { style: { color: "red" } });
        fetchAllLivres();
      })
      .catch(error => {
        toast.error("Une erreur s'est produite.", { style: { backgroundColor: "red", color: "#ffffff" } });
        console.error(error);
      });
  };
  
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    setPhoto('');
    setLivre_code('');
    setNom_livre('');
    setNom_auteur('');
    setAnnee('');
    setPrix('');
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
      
        setLivre_code(values.livre_code);
        setNom_livre(values.nom_livre);
        setNom_auteur(values.nom_auteur);
        setAnnee(values.annee);
        setPrix(values.prix);
        setPhoto(values.photo);
        save(currentId);
      })
      .catch(info => console.log("Validation Failed:", info));
  };
  
  
  const  titel=()=>{
    return <h5 className="text-center " style={{color:"DodgerBlue"}}>
      {currentId?"Modifier le livre":"Ajouter un  livre"}
    </h5>
    }

  const beforeUpload = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setPhoto(reader.result.split(',')[1]);
    return false;
  };

  const OpenPrint=()=>{
    setIsPrintModalVisible(true);

  }
  const PrintCancel = () => {
    setIsPrintModalVisible(false);
   
  };

  const PrintOk = () => {
    setIsPrintModalVisible(false);
    // form.resetFields();
     
     
  };

  return (
    <>
      <Header />
      <div className="container ">
        <br />
        <h3 className="text-center">Liste des Livres</h3>
        <br />
        <div className="row mb-1 justify-content-between">
        <div className='col-auto'>
        <Button type="primary" onClick={() => showModal()}>
          <i className="fa fa-plus"></i>
        </Button>
        <Button type="success" onClick={() => OpenPrint()} style={{background:"MediumSeaGreen",gap:"4px"}}>
          <i className="fa fa-floppy-o"></i>
        </Button>
        </div>
        <div className="col-auto">
          <div className="input-group">
            <div className="form-outline">
            <Input placeholder="Recherche..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)} 
             prefix={<SearchOutlined />} />
            
            </div>
          </div>
          </div>
          </div>
       
        <Modal
          visible={visible}
         title={titel()}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Enregistrer"
          cancelText="Annuler"
          okButtonProps={{ style: { backgroundColor: 'white', color: 'green', border: 'dashed' } }}
          cancelButtonProps={{ style: { backgroundColor: 'white', color: 'red', border: 'dashed' } }}
        > <br />
          <Form form={form} layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Nom_livre" name="nom_livre" rules={[{ required: true, message: "Entrer le nom de livre!" }]}>
                  <Input value={nom_livre} onChange={(e) => setNom_livre(e.target.value)} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Nom_auteur" name="nom_auteur" rules={[{ required: true, message: "Entrer le nom d'auteur!" }]}>
                  <Input value={nom_auteur} onChange={(e) => setNom_auteur(e.target.value)} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Prix" name="prix" rules={[{ required: true, message: "Entrer le prix!" }]}>
                  <InputNumber style={{ width: "100%" }} value={prix} onChange={(value) => setPrix(value)} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Annee" name="annee" rules={[{ required: true, message: "Entrer l'Annee d'ajout" }]}>
                  <InputNumber min={1900} max={new Date().getFullYear()} style={{ width: "100%" }} value={annee} onChange={(value) => setAnnee(value)} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Livre_code" name="livre_code" rules={[{ required: true, message: "Entrer le code du livre!" }]}>
                  <Input value={livre_code} onChange={(e) => setLivre_code(e.target.value)} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Cover" name="cover">
                  <Upload accept="image/*" showUploadList={false} beforeUpload={beforeUpload}>
                    <Button>Télécharger une image</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
        <div className="livre-container">
          {livres.filter(
            (livre)=>{
        //make the possibility to search with diffrent parameters
              return searchTerm.toLowerCase() === '' || livre.nom_livre.toLowerCase().includes(searchTerm.toLowerCase())||
              livre.annee.toString() === searchTerm||
              livre.nom_auteur.toLowerCase().includes(searchTerm.toLowerCase())
              ;
            }
          ).map((livre) => (
            <div key={livre.id_livre} className="livre-card">
              <img src={`data:image/jpeg;base64,${livre.photo}`} alt={livre.nom_livre} className="livre-image" />
              <div className="livre-hover-info">
                <p>Auteur: {livre.nom_auteur}</p>
                <p>Année d'ajout: {livre.annee}</p>
                <p>Code: {livre.livre_code}</p>
                <div className="button-container">
                <button className="btn btn-danger" onClick={() => supprimer(livre.id_livre)}><i className="fa fa-trash-o"></i></button>
                <button className="btn btn-warning" onClick={() => showModal(livre.id_livre)}><i className="fa fa-pencil"></i></button>
                </div>
              </div>
            </div>
          ))}

          <Modal
           title={<div style={{ textAlign: "center", color: "#22313f" }}>Selectionner l'option que vous souhaitez d'imprimer </div>}
           visible={isPrintModalVisible}
           onOk={PrintOk}
           onCancel={PrintCancel}
           okText="Continuer"
           cancelText="Annuler"
           okButtonProps={{ style: { backgroundColor: 'white', color: 'DodgerBlue', border: 'dashed' } }}
           cancelButtonProps={{ style: { backgroundColor: 'white', color: 'red', border: 'dashed' } }}>
            <Form  layout="vertical">
            <Row gutter={16}>
            <Col span={12}>
            <Form.Item label="" name="" >
                  
              
             <Select rules={[{ required: true, message: "Entrer le code du livreSelectionner un choix" }]}>
                <Select.Option value="all">Tous</Select.Option>
                <Select.Option value="2023">2023</Select.Option>
                <Select.Option value="2024">2024</Select.Option>
              </Select>
              </Form.Item>
              
              </Col>
              </Row>

            </Form>

          </Modal>
           <PDFDownloadLink
        // document={<Recu nom={livre.nom} prenom={livre.prenom} email={livre.email} statu={livre.statu} choix={livre.choix} />}
        // fileName="reçu_inscription.pdf"
      >
        {({ loading }) => (
          <button type="button" className="btn btn-secondary">
            <i className="fa fa-floppy-o" aria-hidden="true"></i> {loading}
          </button>
        )}
      </PDFDownloadLink>
        </div>
      </div>
    </>
  );
};

export default Livre;


