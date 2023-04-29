<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection as JsonResourceCollection;

abstract class ResourceCollection extends JsonResourceCollection implements IResource
{
    use TranslateAttributes;

    protected string | null $_language;
    public function __construct($resource, $language = null)
    {
        parent::__construct($resource);
        $this->_language = $language;
    }

}
