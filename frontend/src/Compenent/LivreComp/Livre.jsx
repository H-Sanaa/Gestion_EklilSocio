import React, { useState, useEffect } from "react";
import Header from "../HeaderFooter/Header";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  InputNumber,
  Row,
  Col,
  message
} from "antd";
import "./Livre.css";
const Livre = () => {
  const [livres, setLivres] = useState([]);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const navigate=useNavigate();


  //REST API
  const REST_API_BASE_URL = "http://localhost:8080/api/livre";
  const listLivre = () => axios.get(REST_API_BASE_URL);
  const createLivre=(livre)=>axios.post(REST_API_BASE_URL+"/ajouter",livre);
 // define state variables using useState hook (for creating)

 const[livre_code,setLivre_code]=useState('');
 const[nom_livre,setNom_livre]=useState('');
 const[nom_auteur,setNom_auteur]=useState('');
 const[photo,setPhoto]=useState('');
 const[annee,setAnnee]=useState('');
 const[prix,setPrix]=useState('');
 const save=()=>{
  const livre={livre_code,nom_livre,nom_auteur,photo,annee,prix};
  createLivre(livre).then((response)=>{
    console.log(response.data);
    navigate('/livre');
    toast.success("Le livre ajouter avec succès !",{style:{
      backgroundColor: "green", // Couleur de fond (vert)
      color: "#ffffff",           // Couleur du texte (blanc)
    }});
    getAllLivre();//refresh list after adding
    
  }).catch(error=>(
    console.error(error)
    ))}
 



  useEffect(() => {
    getAllLivre();
  }, []);
  function getAllLivre() {
    listLivre()
      .then((response) => {
        setLivres(response.data);
      })
      .catch((error) => console.error(error));
  }

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        //Set state values
        setLivre_code(values.livre_code);
        setNom_livre(values.nom_livre);
        setNom_auteur(values.nom_auteur);
        setAnnee(values.annee);
        setPrix(values.prix);
        //call save function
        save();
        
        handleCancel(); // Close modal after submission
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };
 

const handleUploadChange = (info) => {
  if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
  }
};

const beforeUpload = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
      const base64String = reader.result.split(',')[1]; // Get the Base64 part only
      setPhoto(base64String); // Store the Base64 string in your state
  };
  return false; // Prevent default upload behavior
};

 

return (
    <>
      <Header />
      <div className="container ">
        <br />
        <h3 className="text-center">Liste des Livres</h3>
        <br />
        <Button type="primary" onClick={showModal}>
          <i class="fa fa-plus" ></i>
        </Button>
        <br />
        <Modal
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Enregister"
          cancelText="Anuller"
        >
          <h5 className="text-center" style={{color:"gray"}}>Ajouter nouvelle livre</h5>
          <br/>
          <Form form={form} layout="vertical">

          <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Nom_livre"
              name="nom_livre"
              rules={[{ required: true, message: "Entrer le nom de livre!" }]}
            >
              <Input value={nom_livre} onChange={(e) => setNom_livre(e.target.value)}/>
            
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item
              label="Nom_auteur"
              name="nom_auteur"
              rules={[{ required: true, message: "Entrer le nom d'auteur!" }]}
            >
              <Input value={nom_auteur} onChange={(e) => setNom_auteur(e.target.value)}/>
            </Form.Item>
            </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Prix"
                  name="prix"
                  rules={[{ required: true, message: "Entrer le prix!" }]}
                >
                  <InputNumber style={{ width: "100%" }} value={prix} onChange={(value) => setPrix(value)}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Annee"
                  name="annee"
                  rules={[
                    { required: true, message: "Entrer l'Annee d'ajout" },
                  ]}
                >
                  <InputNumber
                    min={1900}
                    max={new Date().getFullYear()}
                    placeholder="Annee"
                    style={{ width: "100%" }}
                    value={annee}
                    onChange={(value) => setAnnee(value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
            <Col span={12}>
            <Form.Item
              label="Livre_code"
              name="livre_code"
              rules={[{ required: true, message: "Entrer le code du livre!" }]}
            >
              <Input value={livre_code} onChange={(e) => setLivre_code(e.target.value)}/>
            </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item label="Cover" name="cover">
              <Upload 
               accept="image/*" // Only accept image files
               showUploadList={false} // Don't show the upload list
               beforeUpload={beforeUpload}
               onChange={handleUploadChange}
              
                >
                    <Button>Télécharger une image</Button>
                
              </Upload>
            </Form.Item>
            </Col>
            </Row>
          </Form>
        </Modal>

        <br />
        <div className="livre-container">
          {livres.map((livre) => (
            <div key={livre.id_livre} className="livre-card">
              <img
                src={`data:image/jpeg;base64,${livre.photo}`}
                alt={livre.nom_livre}
                className="livre-image"
              />

              <div className="livre-hover-info">
                <p>Auteur: {livre.nom_auteur}</p>
                <p>Année d'ajout: {livre.annee} </p>
                <p>Code :{livre.livre_code} </p>
                <p>
                  {" "}
                  <button type="button" className="btn btn-danger">
                    <i class="fa fa-trash-o"></i>
                  </button>
                  <button type="button" className="btn btn-warning">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  
}
export default Livre;
