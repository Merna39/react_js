import {  Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner6.png"></BannerImage>
      <BannerContent>
        
        <Typography variant="h5">Stylish Collection </Typography>
        <BannerTitle variant="h3"> Pretty Jewellery</BannerTitle>
        <BannerDescription variant="subtitle">
            We have all you need ♥️💍
        </BannerDescription>
  


      </BannerContent>
  
  </BannerContainer>
  );
}
