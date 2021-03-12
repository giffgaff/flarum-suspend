<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Suspend;

use Flarum\Api\Serializer\CurrentUserSerializer;
use Flarum\Formatter\Formatter;
use Flarum\Post\Post;
use Flarum\User\User;

class AddCurrentUserSuspendAttributes
{
    public $formatter;
    
    public function __construct(Formatter $formatter)
    {
        $this->formatter = $formatter;
    }
    
    public function __invoke(CurrentUserSerializer $serializer, User $user)
    {
        $attributes = [];

        // Double check the actor is the user being serialized
        $isCurrentUser = $serializer->getActor()->id === $user->id;

        // If the current user is suspended, add the suspension message and until date as an HTML fragment
        if ($isCurrentUser && !empty($user->suspended_until)) {
            if (! empty($user->suspend_message)) {
                $attributes['suspendMessage'] = empty($user->suspend_message) ? $user->suspend_message : $this->formatter->render($user->suspend_message, new Post());
            }
            $attributes['suspendedUntil'] = $serializer->formatDate($user->suspended_until);
        }

        return $attributes;
    }
}