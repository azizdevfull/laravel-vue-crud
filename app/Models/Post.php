<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'body',
        'slug',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            $slug = $post->generateUniqueSlug($post->title);
            $post->slug = $slug;
        });
    }

    private function generateUniqueSlug($title, $count = 0)
    {
        $slug = Str::slug($title);

        if ($count > 0) {
            $slug .= "-ID$count";
        }

        if (Post::where('slug', $slug)->exists()) {
            return $this->generateUniqueSlug($title, $count + 1);
        }

        return $slug;
    }
}
