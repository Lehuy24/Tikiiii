import styled from "styled-components";
import ButtonCompoment from "../../compoments/ButtonCompoment/ButtonCompoment";
export const WrapperTypeProduct = styled.div`
display:flex;
align-items: center;
gap:24px;
justify-content:flex-start;
border-bottom: 1px solid red;
height :44px;
`
export const WrappperButtonMore = styled(ButtonCompoment)`
&:hover {
    color :#fff;
    background:rgb(13,92,182);
    span{
        color :#fff;
    }
}
`