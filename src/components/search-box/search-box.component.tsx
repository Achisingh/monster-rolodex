// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;
//     return (
//       <input
//         className={className}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
  className: string,
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
