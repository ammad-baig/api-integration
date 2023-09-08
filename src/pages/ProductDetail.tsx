import { Box, Typography, Card, CardActionArea, CardMedia, Button, CardContent, CardActions, Link } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




export default function ProductDetail() {

    const params = useParams()
    const [cards, setCards] = useState<any>({})


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => {
                setCards({ ...res.data })
            })
            .catch((err) => console.log(err))
    }, [])

    const navigate = useNavigate()
    const mainPage = () => {
        navigate('/')
    }



    return (
        <>
            <Box className="bg-black text-center text-white">
                <Typography className='p-3 fs-1 '>
                    <ShoppingCartOutlinedIcon className='text-warning fs-1 mb-2 mx-2' />SHOPPING SOLUTION
                </Typography>
            </Box>

            <Box className="bg-dark text-center text-white my-1 p-2">
                <Typography className='fs-4'>
                    We Have What You Want
                </Typography>
            </Box>

            <Button onClick={mainPage} startIcon={<ArrowBackIcon />} variant='contained' className='ms-5'>
                BACK
            </Button>

            {/* <Button variant='contained' onClick={getData}>Show Details</Button> */}

            <Card className='p-3 text-center mt-4 shadow-lg container' sx={{ maxWidth: 900 }}>
                <CardActionArea>
                    <div className="row">
                        <div className="col-md-6">

                            <CardMedia
                                className='pt-5'
                                component="img"
                                width="100%"
                                image={cards.image}
                                alt=""
                            />
                        </div>
                        <div className="col-md-6">

                            <CardContent>
                                <Typography gutterBottom className='py-3 fw-bold text-center' variant="h5" component="div">
                                    {cards.title}
                                </Typography>
                                <Typography className='py-3' variant="h6" color="text.secondary">
                                    <span className='fw-bold text-black'>Category : </span> {cards.category}
                                </Typography>
                                <Typography className='py-3' variant="h6" color="text.secondary">
                                    <span className='fw-bold fs-5 text-black'>Description : </span> {cards.description}
                                </Typography>
                                <Typography className='py-3' variant="h5" color="text.secondary">
                                    <span className='fw-bold fs-5 text-black'>Price : </span> {cards.price}$
                                </Typography>
                                <Button onClick={() => alert("Thanks For Buying")} variant='contained' className='w-100 p-2'>Buy Now</Button>
                            </CardContent>
                        </div>
                    </div>
                </CardActionArea>
            </Card >
        </>

    )
}
