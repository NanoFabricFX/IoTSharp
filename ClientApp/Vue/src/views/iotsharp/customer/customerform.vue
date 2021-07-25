<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="720px"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm">
      <template #menu="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          :replaceFields="{ title: 'menuName', key: 'id' }"
          checkable
          toolbar
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicDrawer>
</template>

<script lang="ts">
  import { Guid } from 'guid-typescript';
  import { Save, Update } from '../../../api/iotsharp/customer';
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  export default defineComponent({
    name: 'Tenantform',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 90,
        schemas: [
          {
            field: 'name',
            label: '客户名称',
            required: true,
            component: 'Input',
          },
          {
            field: 'eMail',
            label: '邮箱',
            rules: [
              {
                required: true,
                validator: async (rule, value) => {
                  if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
                    return Promise.reject('邮箱格式错误');
                  }
                  return Promise.resolve();
                },
              },
            ],
            component: 'Input',
          },
          {
            field: 'phone',
            label: '联系电话',
            rules: [
              {
                required: true,
                validator: async (rule, value) => {
                  if (
                    !/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
                      value
                    )
                  ) {
                    return Promise.reject('联系电话格式不正确');
                  }
                  return Promise.resolve();
                },
              },
            ],
            component: 'Input',
          },
          {
            field: 'country',
            label: '国家',
            required: true,
            component: 'Input',
          },
          {
            field: 'province',
            label: '省',
            required: true,
            component: 'Input',
          },
          {
            field: 'city',
            label: '市',
            required: true,
            component: 'Input',
          },
          {
            field: 'street',
            label: '街道',
            required: true,
            component: 'Input',
          },
          {
            field: 'address',
            label: '地址',
            required: true,
            component: 'Input',
          },
          {
            field: 'zipCode',
            label: '邮编',
            required: true,
            component: 'Input',
          },
          {
            field: 'id',
            label: 'id',
            required: false,
            component: 'Input',
            show: false,
          },
          {
            field: 'tenantID',
            label: 'tenantID',
            required: false,
            component: 'Input',
            show: false,
          },
        ],
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.item,
          });
        } else {

          //may
          setFieldsValue({
            ...data.item,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增客户' : '编辑客户'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          // TODO custom api

          if (values.id) {
            Update(values).then((x) => {
              emit('success');
              closeDrawer();
            });
          } else {
            values.id = Guid.create().value;
            Save(values).then((x) => {
              emit('success');
              closeDrawer();
            });
          }
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return {
        registerDrawer,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  });
</script>
