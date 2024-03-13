'use client';

import { Button, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface issueForm {
  title: string,
  description: string
}

const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<issueForm>();

  return (
    <form className='max-w-xl space-y-5' onSubmit={handleSubmit(async(data) => {
      await axios.post('api/issues', data);
      router.push('/issues');
    })}>
      <TextField.Root>
        <TextField.Input placeholder='Title' {...register('title')}></TextField.Input>
      </TextField.Root>
      <Controller name="description" control={control} render={({ field }) => <SimpleMDE placeholder='Description' {...field} />} />
      <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssue