<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        collect([
        [
            'username' => 'agozalii',
            'name' => 'Ahmad Gozali',
            'email' => 'ahmad@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
        ],
        [
            'username' => 'adii',
            'name' => 'Adi wibowo',
            'email' => 'adi@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
        ],
        ])->each(function ($user){
            \App\Models\User::create($user);
        });

         \App\Models\User::factory(10)->create();

    }
}
