
const Header = ({title,headerClass}) => {
  return <h2 className={headerClass}>
    {title}
    </h2>;
};

export default Header;

// props typing
// const Header = (props) => {
//   return <h2 className={props.headerClass}>
//     {props.title}
//     </h2>;
// };

// export default Header;
