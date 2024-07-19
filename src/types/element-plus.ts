import {
  ElForm,
  ElTableColumn,
  ElButton,
  ElDialog,
  ElTable,
  ElImage,
  ElScrollbar,
  ElTreeV2,
  FormItemRule
} from 'element-plus'

export type IElForm = InstanceType<typeof ElForm>
export type IElTableColumn = InstanceType<typeof ElTableColumn>
export type IElDialog = InstanceType<typeof ElDialog>
export type IElButton = InstanceType<typeof ElButton>
export type ITable = InstanceType<typeof ElTable>
export type IImage = InstanceType<typeof ElImage>
export type IScrollbar = InstanceType<typeof ElScrollbar>
export type IElTreeV2 = InstanceType<typeof ElTreeV2>

export type IFormRule = Record<string, FormItemRule[]>
