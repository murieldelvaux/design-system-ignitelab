import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react'

export default{
    title: 'Components/TextInput', // a barra cria subcategorias
    component: TextInput.Root,
    args:{
        children:(
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='Type your e-mail address'/>
            </>
        ),
    },
    argTypes:{}
} as Meta< TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {} //exporto como objeto vazio, pois não terá muitas variações

export const WithoutIcon: StoryObj<TextInputRootProps> ={
    args:{
        children: <TextInput.Input placeholder='Type your e-mail address' />
    }
}