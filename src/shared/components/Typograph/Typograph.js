import { TypographyStyled } from "./typograph.styled"


export const Typograph = ({children,size,className,color})=>{
    return (
      <TypographyStyled font={size} className={className}>
        {children}
      </TypographyStyled>
    );
}