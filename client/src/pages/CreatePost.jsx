import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingimg, setGeneratingimg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {}

  const handleSurpriseMe = async () => {}

  return (
    <section className="max-w-7xl mx-auto">
     <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and visually stunning images and share them with the community</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
          LabelName="Your name"
          type="text"
          name="name"
          placeholder="Jon Doe"
          value={form.name}
          handleChange={handleChange}
          />
          <FormField 
          LabelName="prompt"
          type="text"
          name="prompt"
          placeholder="an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost