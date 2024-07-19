import Circular from '@/components/Circular/Circular.vue'
import CountTo from '@/components/CountTo/CountTo.vue'
import DialogForm from '@/components/Dialog/DialogForm.vue'
import SvgIcon from '@/components/Icon/SvgIcon.vue'
import SvgIconList from '@/components/Icon/SvgIconList.vue'
import CardList from '@/components/Table/CardList.vue'
import TableForm from '@/components/Table/TableForm.vue'
import TableFormItem from '@/components/Table/TableFormItem.vue'
import ToImage from '@/components/Table/ToImage.vue'
import Tinymce from '@/components/Tinymce/Tinymce.vue'
import Upload from '@/components/Upload/UploadFile.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Circular: typeof Circular
    CountTo: typeof CountTo
    DialogForm: typeof DialogForm
    SvgIcon: typeof SvgIcon
    SvgIconList: typeof SvgIconList
    CardList: typeof CardList
    TableForm: typeof TableForm
    TableFormItem: typeof TableFormItem
    ToImage: typeof ToImage
    Tinymce: typeof Tinymce
    Upload: typeof Upload
  }
}
