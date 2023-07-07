from transformers import GPT2LMHeadModel, GPT2Tokenizer, Trainer, TrainingArguments
from datasets import load_dataset, Dataset
import pandas as pd

# 加载预训练模型和分词器
model = GPT2LMHeadModel.from_pretrained("gpt2")
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

# 分词器设定
tokenizer.pad_token = tokenizer.eos_token

# 读取csv文件
df = pd.read_csv('D:\\OneDrive - UNSW\\桌面\\my_dataset.csv')

# 把question和answer合并到一起
texts = df.question + " " + df.answer

# 分词
inputs = tokenizer(texts.to_list(), return_tensors='pt', truncation=True, padding=True, max_length=1024)

# 将数据转换为datasets库的数据集
inputs = {k: v.tolist() for k, v in inputs.items()}
inputs["labels"] = inputs["input_ids"]  # 设置labels为input_ids

dataset = Dataset.from_dict(inputs)

# 创建训练参数
training_args = TrainingArguments(
    output_dir="./results",
    overwrite_output_dir=True,
    num_train_epochs=10,
    per_device_train_batch_size=1,
    save_steps=10_000,
    save_total_limit=2,
)

# 创建训练器并训练模型
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset,
)

import os

if not os.path.exists("./results/runs"):
    os.makedirs("./results/runs")
trainer.train()
trainer.save_model("./results")



from transformers import GPT2LMHeadModel, GPT2Tokenizer

# 加载你训练过的模型和原始分词器
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("./results")

# 对一个句子进行编码
input_ids = tokenizer.encode("Umm...", return_tensors='pt')

# 生成文本
output = model.generate(input_ids, max_length=100, num_return_sequences=1, temperature=0.7)

# 解码生成的文本
generated_text = tokenizer.decode(output[0], skip_special_tokens=True)

print(generated_text)

