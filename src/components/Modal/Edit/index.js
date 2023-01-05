import styles from '../Add/Add.module.scss'
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
import { useState, useEffect } from 'react';
import axios from "axios";

function EditPost({modal, setModal, pid}) {
    const [title, setTitle] = useState('')
    const [images, setImages] = useState([]);
    const [tag, setTag] = useState('');
    const [description, setDescrip] = useState('')
    const [id, setId] = useState(-1)

    const getTag = (tags=[]) => {
        let tag = ''
        for (let i=0; i<tags.length; i++) {
            tag = tag + '#' + tags[i]
            if (i !== tags.length-1) tag = tag + ' '
        }
        return tag
    }
    
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getPost = async (pid) => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${pid}`,
                {withCredentials: true},
                {
                    signal: controller.signal
                }
                ) 
                console.log(response.data)
                setTitle(response.data.title)
                setImages(response.data.img)
                setDescrip(response.data.content)
                setId(response.data._id)
            } catch (err) {
                console.log(err)
                // navigate('/', { state: { from: location }, replace: true})
            }
        }
        if (parseInt(pid) !== -1) 
            getPost(pid)

        return () => {
            
            isMounted = false
            controller.abort()
        }
    }, [pid, modal])

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const handleTag = () => {
        let tags = []
        for (let i=0; i<tag.length; i++) {
            if (tag[i] === '#') {
                let j=i+1, new_tag=''
                while (tag[j] !== ' ' && j<tag.length) {
                    new_tag = new_tag + tag[j]
                    j++
                }
                if (new_tag.length !== 0) tags.push(new_tag)
                i += j
            }
        }
        return tags
    }

    const handleClose = () => {
        setTitle("")
        setImages([])
        setTag('')
        setDescrip("")
        setModal(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let post = {title, content: description, img: [images[0].data_url], tag: handleTag()}
        try {
            // eslint-disable-next-line
            const response = await axios.put(`http://localhost:3000/posts/${id}`,
                post,
                {withCredentials: true}
            )
            alert("Updated successfully")
            handleClose()
        } catch (err) {
            alert("failed to update")
        }
    }
    return ( 
        <>
        <Dialog open={modal} onClose={handleClose}>
            <DialogTitle className={clsx(styles.title)} style={{marginBottom: '0px'}}>Update Post</DialogTitle>
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
                        <button type="reset" onClick={handleClose}>Close</button>
                        <button type="submit">Update</button>
                    </div>
                </Box>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default EditPost;