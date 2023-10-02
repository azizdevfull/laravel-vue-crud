<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create([
            'title' => 'Azizdev uz',
            'en_title' => 'Azizdev en',
            'slug' => 'azizdev',
            'body' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam, doloremque, doloremque, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, quaerat, qu',
            'en_body' => 'en ksndkjfn sdfkjnfksjdn rn',
        ]);
    }
}
