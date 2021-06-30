import styled from "styled-components";

export const Wrap = styled.div`
  max-width: 300px;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: gray;
  text-align: center;
`
export const Input = styled.input`
  border: 1px solid forestgreen;
  border-radius: 8px 0 0 8px;
  padding: 8px;
  width: calc(300px - 44px);
  margin: 24px 0 16px;
  height: 42px;
`

export const Button = styled.button`
  border: 1px solid forestgreen;
  background-color: limegreen;
  color: white;
  border-radius: 0 8px 8px 0;
  padding: 8px;
  margin: 0 auto;
  height: 42px;
`

export const Error = styled.p`
  color: red;
  font-style: italic;
`

export const Form = styled.form`
  margin-bottom: 36px;
`

export const Card = styled.div`
  border: 1px solid forestgreen;
  background-color: limegreen;
  color: white;
  border-radius: 8px;
  width: 200px;
  margin: 24px auto;
`


export const CardImage = styled.div`
  background-color: white;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 120px;
  margin: 0 auto;
`

export const CardBody = styled.div`
  padding: 24px;
  background-color: limegreen;
`

export const UlMenu = styled.ul`
  padding:0px;
  margin:0px;
  list-style:none;
  display: inline;
`

export const LiMenu = styled.li`
  padding: 2px 10px;
  display: inline-block;
  display: inline;
`

export const NavMenu = styled.nav`
  width: 100%;
  padding:0px;
  margin:0px;
`

export const HeaderMenu = styled.header`
  position: fixed;
`

export const BackgroundLogin = styled.body`
  background: url(../images/login_backend.png) no-repeat center center fixed;
  background-size: cover;
`

export const WrapLogin = styled.div`
  max-width: 300px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 20px;
`

export const WrapManut = styled.div`
  max-width: 600px;
  margin: 0 auto;
`