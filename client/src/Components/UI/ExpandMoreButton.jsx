import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const ExpandMoreButton = ({ expand, onClick }) => {
  return (
    <StyledExpandMore
      expand={expand}
      onClick={onClick}
      aria-expanded={expand}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </StyledExpandMore>
  );
};

const StyledExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default ExpandMoreButton;
