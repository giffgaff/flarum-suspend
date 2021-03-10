<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Suspend;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Formatter\Formatter;
use Flarum\Post\Post;
use Flarum\User\User;

class AddUserSuspendAttributes
{
    public $formatter;
    
    public function __construct(Formatter $formatter)
    {
        $this->formatter = $formatter;
    }
    
    public function __invoke(UserSerializer $serializer, User $user)
    {
        $attributes = [];
        $canSuspend = $serializer->getActor()->hasPermission('user.suspend');

        // If the user has `user.suspend` permission, then they may access the suspension properties. Added as HTML fragment for preview purposes, and as raw for editing.
        if ($canSuspend) {
            $attributes['suspendedUntil'] = $serializer->formatDate($user->suspended_until);
            $attributes['suspendMessageRaw'] = empty($user->suspend_message) ? $user->suspend_message : $this->formatter->unparse($user->suspend_message, new Post());
            $attributes['suspendMessage'] = empty($user->suspend_message) ? $user->suspend_message : $this->formatter->render($user->suspend_message, new Post());
            $attributes['suspendReasonRaw'] = empty($user->suspend_reason) ? $user->suspend_reason : $this->formatter->unparse($user->suspend_reason, new Post());
            $attributes['suspendReason'] = empty($user->suspend_reason) ? $user->suspend_reason : $this->formatter->render($user->suspend_reason, new Post());
        }

        $attributes['canSuspend'] = $canSuspend;

        return $attributes;
    }
}
