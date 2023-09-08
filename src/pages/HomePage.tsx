import { Box, Typography, Card, CardActionArea, CardMedia, Button, CardContent, CardActions } from '@mui/material'
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function HomePage() {

  const [listData, setListData] = useState<any>([])


  const navigate = useNavigate()
  const cardDetails = (id: number) => {
    navigate(`productDetails/${id}`)
  }

  useEffect(() => {
    const getData = () => {
      axios.get('https://fakestoreapi.com/products')
        .then((res) => {
          console.log(res.data)
          setListData([...res.data])
        })
        .catch((err) => console.log(err))
    }

    getData()
  }, [])
  return (
    <>
      <Box className="bg-black text-center text-white ">
        <Typography className='p-3 fs-1 '>
          <ShoppingCartOutlinedIcon className='text-warning fs-1 mb-2 mx-2' />SHOPPING SOLUTION
        </Typography>
      </Box>
      <Box className="bg-dark text-center text-white my-1 p-2">
        <Typography className='fs-4'>
          We Have What You Want
        </Typography>
      </Box>

      {/* <Button variant='contained' onClick={getData}>
        CLICK HERE
      </Button> */}

      <Box className="d-flex flex-wrap mx-5 align-baseline">
        {listData.map((x: any, i: number) => {
          return (
            <Card onClick={() => cardDetails(x.id)} key={i} className='p-3 m-2 shadow-lg' sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={x.image}
                  alt=""
                  style={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {x.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant='contained' size="small" className='ms-auto  p-2'>
                  More Details
                </Button>
              </CardActions>
            </Card>
          )
        })}
      </Box>


    </>
  )
}
