declare module "danglebary-react-search-bar" {
    interface propTypes {
        submitFunction: (data: string) => void,
        noIcons?: Boolean,
        noSearchIcon?: Boolean,
        noMicIcon?: Boolean,
        noBorder?: Boolean,
    }
    const SearchBar: React.FC<propTypes>
}