import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default{
    title: 'Components/Text', // a barra cria subcategorias
    component: Text,
    args:{
        children: 'Lorem Ipsum.',
        size: 'md',
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {} //exporto como objeto vazio, pois não terá muitas variações
export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm' //configurando o tamanho da varição
    }
} 
export const Large: StoryObj<TextProps> = {
    args:{
        size: 'lg' //configurando o tamanho da varição
    }
} 
export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:(
            <p> Testando </p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true, // para não mostrar children do componente
            }
        }
    }
} 
export const CustomTitle: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:(
            <h1> EU sou um title </h1>
        ),
        size:'lg',
    }
} 