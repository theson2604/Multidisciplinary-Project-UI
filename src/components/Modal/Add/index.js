import styles from './Add.module.scss'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageUploading from 'react-images-uploading';
import { useState } from 'react';
import axios from "axios";



function Add({modal, setModal}) {
    const [title, setTitle] = useState('')
    const [images, setImages] = useState([]);
    const [tag, setTag] = useState('');
    const [description, setDescrip] = useState('')

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const handleClose = () => {
        setTitle("")
        setImages([])
        setTag('')
        setDescrip("")
        setModal(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let post = {title, content: description, img: [images[0].data_url], tag: [tag]}
        console.log(post)
        try {
            // eslint-disable-next-line
            const response = await axios.post(`http://localhost:3000/posts/post`, 
                post,
                {withCredentials: true}
            )
            console.log(response)
            alert("Added successfully")
            handleClose()
        } catch (err) {
            alert("failed to add")
        }
    }
    return ( 
        <>
        <Dialog open={modal} onClose={handleClose}>
            <DialogTitle className={clsx(styles.title)} style={{marginBottom: '0px'}}>Create Post</DialogTitle>
            <DialogContent>
                <Box
                    noValidate
                    component="form"
                    sx={{  width: 450, margin: 0}}
                    onSubmit={handleSubmit}
                >
                    <Stack className={clsx(styles.flexCenter)} style={{marginTop: '2rem'}}>
                        <TextField 
                            style={{minWidth: '400px'}} 
                            id="outlined-basic" 
                            label="Title" 
                            variant="outlined" 
                            onChange= {e => setTitle(e.target.value)}
                            defaultValue={title}
                        />
                    </Stack>
                    <Stack style={{marginTop: '1.5rem', marginLeft:'2rem'}}>
                        <div className="App">
                            <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                dataURLKey="data_url"
                            >
                                {({
                                imageList,
                                onImageUpload,
                                onImageRemove,
                                dragProps,
                                }) => (
                                   <div className="upload__image-wrapper">
                                    Choose picture
                                    &nbsp;
                                    <FontAwesomeIcon 
                                        icon={faImage}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    />   
                                    <div className={clsx(styles.flexCenter)}>
                                        {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="100" />
                                            <div className="image-item__btn-wrapper">
                                            <button 
                                                onClick={() => onImageRemove(index)} 
                                                style={{background:'transparent', border: 'none'}}
                                            >x</button>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                )}
                            </ImageUploading>
                        </div>
                    </Stack>
                    <Stack className={clsx(styles.flexCenter)} style={{marginTop: '2rem'}}>
                        <TextField 
                            style={{minWidth: '400px'}} 
                            id="outlined-basic" 
                            label="Tag" 
                            variant="outlined" 
                            onChange= {e => setTag(e.target.value)}
                            defaultValue={tag}
                        />
                    </Stack>
                    <Stack className={clsx(styles.flexCenter)} style={{marginTop: '2rem'}}>
                        <TextField 
                            style={{minWidth: '400px'}} 
                            id="outlined-basic" 
                            label="Mô tả" 
                            variant="outlined" 
                            onChange= {e => setDescrip(e.target.value)}
                            defaultValue={description}
                        />
                    </Stack>
                    <div className={clsx(styles.modalButton)}>
                        <button type="button" onClick={handleClose}>Close</button>
                        {/* <input type='button' value='Close' onClick={handleClose}/> */}
                        <button type="submit">Create</button>
                    </div>
                </Box>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default Add;