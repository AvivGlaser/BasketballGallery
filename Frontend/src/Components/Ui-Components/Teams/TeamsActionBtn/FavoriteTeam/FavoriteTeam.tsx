import React , {useState} from "react";
import { Button, Tooltip } from "@mui/material";
import "./FavoriteTeam.css";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function FavoriteTeam() {
  const initalState: boolean = false;
  const [isFavorite, setIsFavorite] = useState(initalState);
  return (
    <div className="favorite">
      <Tooltip
        title={
          isFavorite ? "Remove from favorite teams" : "Add to favorite teams"
        }
      >
        <Button
          variant="outlined"
          className="favorite-icon"
          size={"small"}
          onClick={() => setIsFavorite((prevState) => !prevState)}
          startIcon={
            isFavorite ? <StarIcon/>  : <StarBorderIcon/> 
          }
        ></Button>
      </Tooltip>
    </div>
  );
}

export default FavoriteTeam;
