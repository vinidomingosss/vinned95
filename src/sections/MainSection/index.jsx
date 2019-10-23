import React from "react"
import {FaFacebookF} from "react-icons/fa"
import Button from "../../components/Button"
import Avatar from "../../components/Avatar"
import Label from "../../components/Label"
import {Wrapper, AvatarWrapper, ListSocial, Content , SkillsWrapper, ListSkills} from "./styles"

function MainSection() {
    return(
        <Wrapper>
           <Content>
           <AvatarWrapper>
                <Avatar 
                    url="https://ogimg.infoglobo.com.br/in/23807462-5ac-c8d/FT1086A/652/xPaes.jpg.pagespeed.ic.9CcxumNfMH.jpg"
                    size={130}
                />
                <h1>Vinicius Domingos</h1>
                <p>Mobile Developer</p>
                
                <ListSocial>
                <li>
                    <a
                        aria-label="Facebook"
                        href="{{}}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                </li>
            </ListSocial>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ea corrupti blanditiis fugiat mollitia perferendis iusto vitae aut temporibus ratione quas rem possimus optio, consectetur dicta maiores illum vero ab.
            </p>
            </AvatarWrapper>

            <SkillsWrapper>
                <h2>Habilidades</h2>
                <ListSkills>
                    <li><Label>React</Label></li>
                    <li><Label>Flutter</Label></li>
                    <li><Label>Dart</Label></li>
                    <li><Label>Java Script</Label></li>
                </ListSkills>
            </SkillsWrapper>

            <Button
                as="a"
                href="mailto: viniciusda95@gmail.com"
            >
              ME BEIJA !!!!!!  
            </Button>
           </Content>
        
        </Wrapper>
    )
}

export default MainSection