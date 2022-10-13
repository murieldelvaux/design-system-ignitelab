import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default{
    title: 'Components/Button', // a barra cria subcategorias
    component: Button,
    args:{
        children: 'Create account',
    },
    argTypes:{
        
    }
} as Meta< ButtonProps>

export const Default: StoryObj<ButtonProps> = {} //exporto como objeto vazio, pois não terá muitas variações
